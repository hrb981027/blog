## 1、排查问题

```sh
#查看配置文件中有没有跳过密码验证的配置
cd /etc/mysql && sudo grep "skip-grant-tables" -r

#查看配置文件中有没有将密码配置好
cd /etc/mysql && sudo grep "password" -r
```

## 2、常见的解决方案

* 无需密码登录，通常都是因为数据库默认的用户插件问题

```sh
#错误的
MariaDB [(none)]> SELECT user,plugin FROM mysql.user;

+------+-------------+
| user | plugin      |
+------+-------------+
| root | unix_socket |
+------+-------------+
1 row in set (0.01 sec)
```

```sh
#修改为正确的
MariaDB [(none)]> UPDATE mysql.user SET password = PASSWORD('123456'), plugin = 'mysql_native_password' WHERE User = 'root';
MariaDB [(none)]> FLUSH PRIVILEGES;
```
