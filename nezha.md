# 哪吒监控面板

##### 安装 Dashboard

```
curl -L https://raw.githubusercontent.com/nezhahq/scripts/refs/heads/main/install.sh -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```



#####哪吒面板nginx反向代理

```
wget https://raw.githubusercontent.com/1keji/AddIPv6/main/manage_nginx.sh
```

##### 安装agent-Serv00-S145

```
curl -L https://raw.githubusercontent.com/nezhahq/scripts/main/agent/install.sh -o agent.sh && chmod +x agent.sh && env NZ_SERVER=188.68.240.160:1057 NZ_TLS=false NZ_CLIENT_SECRET=NrUr7STkEX3Ngw08V8sWp9Sy2Al3b3Xh ./agent.sh
```



###### 如果安装了多个服务并想要全部卸载，可以使用 Agent 安装脚本的卸载功能：

```
./agent.sh uninstall
```

###### 停止并卸载服务：

```
cd /opt/nezha/agent/

./nezha-agent service uninstall
```

###### 删除 Agent 文件夹：

```
rm -rf /opt/nezha/agent/
```



##### Serv00专用 安装nezha-agent

```
bash <(curl -s https://raw.githubusercontent.com/k0baya/nezha4serv00/main/install-agent.sh)
```

```
188.68.240.160
```

```
1057
```

```
NrUr7STkEX3Ngw08V8sWp9Sy2Al3b3Xh
```




