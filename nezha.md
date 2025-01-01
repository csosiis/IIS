安装 Dashboard

curl -L https://raw.githubusercontent.com/nezhahq/scripts/refs/heads/main/install.sh -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh



Serv00专用

bash <(curl -s https://raw.githubusercontent.com/k0baya/nezha4serv00/main/install-agent.sh)

nz.csosmen.us.kg
1057

YlDm9hbPtlAfg07VOReWwp0jWBbOJDTq



安装agent

curl -L https://raw.githubusercontent.com/nezhahq/scripts/main/agent/install.sh -o agent.sh && chmod +x agent.sh && env NZ_SERVER=nz.csosmen.us.kg:1057 NZ_TLS=false NZ_CLIENT_SECRET=YlDm9hbPtlAfg07VOReWwp0jWBbOJDTq ./agent.sh



如果安装了多个服务并想要全部卸载，可以使用 Agent 安装脚本的卸载功能：


./agent.sh uninstall


停止并卸载服务：

cd /opt/nezha/agent/
./nezha-agent service uninstall


删除 Agent 文件夹：

rm -rf /opt/nezha/agent/
