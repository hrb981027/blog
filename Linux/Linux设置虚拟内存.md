## 1、查看swap分区大小

* 标准的Linux安装，SWAP分区是内存的两倍大小。

* 查看系统内存使用情况，结果以M单位呈现
```
free -m
```

|      | total | used | free | shared | buff/cache | available |
|------|-------|------|------|--------|------------|-----------|
| Mem: |  992  |  429 |  66  |    0   |     497    |    414    |
| Swap:|   0   |   0  |   0  |        |            |           |

## 2、建立swap空间
* if=标准输入文件位置，of=标准输出文件位置，bs=一次读写的缓冲区大小，count=复制的空间大小
```
sudo dd if=/dev/zero of=/var/swap bs=1M count=2048
```

## 3、将生成的文件设置为swap分区文件并激活
```
sudo mkswap /var/swap
sudo swapon /var/swap
```

## 4、使以后开机都自动生效
```
sudo vim /etc/fstab 

/var/swap swap swap defaults  0 0
```

## 5、临时关闭swap分区
```
#关闭所有
sudo swapoff -a
#关闭指定路径的swap分区
sudo swapoff /var/swap
```
