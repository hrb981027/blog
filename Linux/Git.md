## 代码统计

* 统计一天内代码量

```sh
git log --author="$(git config --get user.name)" --since=1.day.ago --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "新增行数: %s, 删除行数: %s, 总计行数: %s\n", add, subs, loc }'
```
