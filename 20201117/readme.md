# 1. 재귀함수

factorial(5)
5! = 5 * (4* ( 3* (2*1)))

장점
- 코드 표현이 간단해짐
- 

단점
- 성능 이슈 존재 가능
- 콜 스택이 많이 쌓이면 터질 수 있음
  

## 1.1 재귀함수 작성 시 유의사항

- 탈출 조건 명시 필요

```java
private static int factorial(int n) {
	//탈출 조건
	if(n == 1) {
		return 1;
	}
	// 5 
	// 4 * 3 * 2 * 1
	//4
	//3 * 2 * 1
	//3
	//2 * 1
	// 5 * factorial(4) * factorial(3) * ..... * factorial(1)
	return n * factorial(n-1);
}
```

꼬리 재귀 최적화(tail recursion optimization)

## 1.2 피보나치 문제

1 1 1 2 3 5 ...

- n번째 항(n 은 3 이상)은 n -1 번째 항과 n -2 번째 항의 합
An = A(n -1 ) + A( n - 2) 같은 말임

A1 = 1
A2 = 1
An = A(n -1) + A(n -2)

# 2. quicksort

- 추가적인 메모리 필요 없음
- 소팅 속도 빠름

## 2.1 알고리즘

1. privot 고르고
2. 왼쪽에는 pivot 보다 작은 값의 배열(리스트)
3. 오른쪽에는 pivot 보다 큰 값의 배열(리스트)

prvot : 5
5 3 8 4 9 1 6 2 7 

(5보다 작은)less : [3 4 1 2]
(5보다 큰) greater : [8 9 6 7]

less = sort(less)
greater = sort(greater)
return less + pivot + greater

prvot : 3

(3보다 적은)less : [1 2]
(3보다 큰)  greater : [4]

List = [19, 22, 23, 28, 10, 19, 4 9, 16, 1]
------------------------------
1번째 호출 sort(List)
pivot : 19
자기 자신의 값은 xxxxx
l - pivot보다 작다 : [10, 4, 9, 1]
g - pivot보다 크다 : [22, 23, 28]
pivot과 같다 : [19, 19]

l = sort(l) //[1, 4, 9, 10, 16]
g = sort(g) //[22, 23, 28]
return less +pivots + greater

[1, 4, 9, 10, 16]+ [19, 19] + [22, 23, 28]
[1, 4, 9, 10, 16, 19, 19, 22, 23, 28]

---------------------------
2번째 호출 sort(l), [10, 4, 9, 16, 1]
pivot : 10
l - pivot보다 작다 : [4, 9, 1]
g - pivot보다 크다 : [16]
pivot: [10]

l = sort(l) // [ 1, 4, 9]
g = sort(g) // [ 16]

----------------------
3번째 호출 sort(l), [4, 9, 1]
pivot : 4

l - pivot보다 작다 : [1]
g - pivot보다 크다 : [9]
pivot 과 같음 : [4]

[1, 4, 9]
return less + pivots + greater