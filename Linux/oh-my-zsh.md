## 1、安装zsh并修改为默认终端

* 这里以Ubuntu为例
```
sudo apt-get install zsh
```

* 更改默认终端
```
chsh -s /bin/zsh
```

* 完成后，重启终端或重启系统

## 2、安装oh-my-zsh

* oh-my-zsh为开源项目，维护于GitHub，先确保你的设备上安装Git，安装Git
```
sudo apt-get install git
```

* 安装oh-my-zsh
```
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

## 3、挑选主题

* oh-my-zsh有着许多许多漂亮的主题，一个漂亮的主题不仅能使用户看着舒服，同时也能间接的提高工作效率，编辑配置文件
```
vim ~/.zshrc

#值为自己喜欢的主题
ZSH_THEME="muse"
```
```
#使配置立即生效
source ~/.zshrc
```

## 4、安装插件

* 这边不多说，必须安利一下以下三个插件：
    > zsh-autosuggestions

    > zsh-history-substring-search

    > zsh-syntax-highlighting

* 下载这三款插件
```
cd ~/.oh-my-zsh/plugins && git clone https://github.com/zsh-users/zsh-autosuggestions ; git clone https://github.com/zsh-users/zsh-history-substring-search ; git clone https://github.com/zsh-users/zsh-syntax-highlighting
```

* 配置插件生效
```
vim ~/.zshrc

plugins=(
    git
    zsh-history-substring-search
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```

* 使配置立即生效
```
source ~/.zshrc
```
