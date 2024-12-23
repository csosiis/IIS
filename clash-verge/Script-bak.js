// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "chatgpt": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/openai.yaml",
    "path": "./ruleset/blackmatrix7/chatgpt.yaml"
  },
  "gemini": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/google-gemini.yaml",
    "path": "./ruleset/blackmatrix7/gemini.yaml"
  },
  "youtube": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/youtube.yaml",
    "path": "./ruleset/blackmatrix7/youtube.yaml"
  },
  "github": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/github.yaml",
    "path": "./ruleset/blackmatrix7/github.yaml"
  },
  "netflix": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/netflix.yaml",
    "path": "./ruleset/blackmatrix7/netflix.yaml"
  },
  "twitter": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/twitter.yaml",
    "path": "./ruleset/blackmatrix7/twitter.yaml"
  },
  "cloudflare": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/cloudflare.yaml",
    "path": "./ruleset/blackmatrix7/cloudflare.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/csosiis/VpnRuleSet/refs/heads/main/clash-verge/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "microsoft": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/microsoft.yaml",
    "path": "./ruleset/loyalsoldier/microsoft.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/apple.yaml",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/private.yaml",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  }
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-SUFFIX,googleapis.cn,Selector", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,Selector", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,Selector", // Google Play下载服务
  "DOMAIN-KEYWORD,speedtest,Speedtest",
  "DOMAIN-SUFFIX,githubusercontent.com,Selector",
  "DOMAIN,v2rayse.com,Selector", // V2rayse节点工具
  "DOMAIN-KEYWORD,getgrass,Global",
  "DOMAIN-KEYWORD,nodepay,Global",
  // blackmatrix7 规则集
  "RULE-SET,chatgpt,ChatGPT",
  "RULE-SET,youtube,YouTube",
  "RULE-SET,github,Github",
  "RULE-SET,netflix,Netflix",
  "RULE-SET,twitter,Twitter",
  "RULE-SET,cloudflare,Cloudflare",
  "RULE-SET,gemini,Gemini",
  // Loyalsoldier 规则集
  "RULE-SET,applications,Global",
  "RULE-SET,private,Global",
  "RULE-SET,reject,AdBlock",
  "RULE-SET,microsoft,Microsoft",
  "RULE-SET,apple,AppleService",
  "RULE-SET,google,GoogleService",
  "RULE-SET,proxy,Selector",
  "RULE-SET,gfw,Selector",
  "RULE-SET,tld-not-cn,Selector",
  "RULE-SET,direct,Global",
  "RULE-SET,lancidr,Global,no-resolve",
  "RULE-SET,cncidr,Global,no-resolve",
  "RULE-SET,telegramcidr,Telegram,no-resolve",
  // 其他规则
  "GEOIP,LAN,Global,no-resolve",
  "GEOIP,CN,Global,no-resolve",
  "MATCH,Omit"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "Selector",
      "type": "select",
      "proxies": ["Auto", "Automatic"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/WiFi.png"
    },
    {
      ...groupBaseOption,
      "url": "https://chatgpt.com",
      "expected-status": "200",
      "name": "ChatGPT",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "GoogleService",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
      ...groupBaseOption,
      "url": "https://gemini.google.com",
      "expected-status": "200",
      "name": "Gemini",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Orz-3/mini@master/Color/NSFW.png"
    },
    {
      ...groupBaseOption,
      "name": "YouTube",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
    },
    {
      ...groupBaseOption,
      "name": "Github",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/github.svg"
    },
    {
      ...groupBaseOption,
      "url": "https://netflix.com",
      "expected-status": "200",
      "name": "Netflix",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/netflix.svg"
    },
    {
      ...groupBaseOption,
      "url": "https://x.com",
      "name": "Twitter",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/twitter.svg"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "name": "Speedtest",
      "type": "select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/SSID_1.png"
    },
    {
      ...groupBaseOption,
      "name": "Cloudflare",
      "type": "select",
      "proxies": ["DIRECT", "Selector"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/cloudflare.svg"
    },
    {
      ...groupBaseOption,
      "name": "Microsoft",
      "type": "select",
      "proxies": ["Global", "Selector", "Auto", "Automatic"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    },
    {
      ...groupBaseOption,
      "name": "AppleService",
      "type": "select",
      "proxies": ["Selector", "Auto", "Automatic", "Global"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
      ...groupBaseOption,
      "name": "Auto",
      "type": "url-test",
      "tolerance": 100,
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "Automatic",
      "type": "fallback",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
    },
    // {
    //   ...groupBaseOption,
    //   "name": "Random",
    //   "type": "load-balance",
    //   "strategy": "consistent-hashing",
    //   "include-all": true,
    //   "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg"
    // },
    // {
    //   ...groupBaseOption,
    //   "name": "Round Robin",
    //   "type": "load-balance",
    //   "strategy": "round-robin",
    //   "include-all": true,
    //   "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg"
    // },
    {
      ...groupBaseOption,
      "name": "AdBlock",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "Global",
      "type": "select",
      "proxies": ["DIRECT", "Selector", "Auto", "Automatic"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "GlobalBlock",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    },
    {
      ...groupBaseOption,
      "name": "Omit",
      "type": "select",
      "proxies": ["Selector", "Auto", "Automatic", "Global"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}