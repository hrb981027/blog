---
title: Linux设置虚拟内存
date: 2020-12-17
categories:
  - Linux
publish: true
---

## 1、查看 swap 分区大小

- 标准的 Linux 安装，SWAP 分区是内存的两倍大小。

- 查看系统内存使用情况，结果以 M 单位呈现

```sh
free -m
```

|       | total | used | free | shared | buff/cache | available |
| ----- | ----- | ---- | ---- | ------ | ---------- | --------- |
| Mem:  | 992   | 429  | 66   | 0      | 497        | 414       |
| Swap: | 0     | 0    | 0    |        |            |           |

## 2、建立 swap 空间

- if=标准输入文件位置，of=标准输出文件位置，bs=一次读写的缓冲区大小，count=复制的空间大小

```sh
sudo dd if=/dev/zero of=/var/swap bs=1M count=2048
```

## 3、将生成的文件设置为 swap 分区文件并激活

```sh
sudo mkswap /var/swap && sudo swapon /var/swap
```

## 4、使以后开机都自动生效

```sh
sudo vim /etc/fstab

/var/swap swap swap defaults  0 0
```

## 5、临时关闭 swap 分区

```sh
#关闭所有
sudo swapoff -a
#关闭指定路径的swap分区
sudo swapoff /var/swap
```
