# 证书申请续签-Nginx

##### 1. 安装 `certbot`

```
sudo apt install certbot python3-certbot-nginx
```

##### 2. 使用 `certbot` 申请证书

```
sudo certbot --nginx
```

##### 3. 配置自动续签

检查 `systemd` 服务状态（推荐）

```
sudo systemctl list-timers | grep certbot
```

如果输出类似 `certbot.timer`，说明系统已设置定时任务来自动续签证书。

##### 4. 手动更新证书（如果没有使用自动配置）

如果你需要手动更新证书配置，证书的默认路径通常为：

- 证书：`/etc/letsencrypt/live/your-domain/fullchain.pem`
- 私钥：`/etc/letsencrypt/live/your-domain/privkey.pem`

##### 5. 检查证书有效性

```
sudo certbot certificates
```



#### 使用 `certbot` 为另一个域名申请证书

##### Nginx：

```
sudo certbot --nginx -d anotherdomain.com
```

为多个域名申请证书

```
sudo certbot --nginx -d example.com -d anotherdomain.com
```

##### 3. 自动续签

`certbot` 会自动配置定时任务来自动续签证书，因此，不管你申请多少个域名的证书，续签都会按时自动进行。

你可以使用以下命令确认自动续签是否配置正确：

```
sudo systemctl list-timers | grep certbot
```

###### 4. 手动续签（如果需要）

如果你希望手动续签证书，可以运行：

```
sudo certbot renew
```

这将检查并续签所有需要续签的证书。