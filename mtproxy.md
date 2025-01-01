# MTProxy一键安装脚本

##### 安装方式

```
mkdir /home/mtproxy && cd /home/mtproxy

curl -s -o mtproxy.sh https://raw.githubusercontent.com/ellermister/mtproxy/master/mtproxy.sh && chmod +x mtproxy.sh && bash mtproxy.sh
```



##### 运行服务

```
bash mtproxy.sh start
```



##### 调试运行

```
bash mtproxy.sh debug
```



##### 停止服务

```
bash mtproxy.sh stop
```



##### 重启服务

```
bash mtproxy.sh restart
```



##### 卸载安装

```
rm -rf /home/mtproxy
```


