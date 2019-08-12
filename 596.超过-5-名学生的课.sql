--
-- @lc app=leetcode.cn id=596 lang=mysql
--
-- [596] 超过5名学生的课
--
# Write your MySQL query statement below
SELECT class FROM courses
GROUP BY class
HAVING COUNT(DISTINCT(student)) >= 5
