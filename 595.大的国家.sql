--
-- @lc app=leetcode.cn id=595 lang=mysql
--
-- [595] 大的国家
--
# Write your MySQL query statement belows
SELECT name,population,area FROM World WHERE area > 3000000 OR population > 25000000
