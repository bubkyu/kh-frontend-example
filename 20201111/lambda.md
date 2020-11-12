# 람다식


// 람다식 표현
(parameter) -> {
    
    //body
    //return type

}
// 메서드 표현
type lambda(parameter){
    //body
    //return type

}

@FunctionalInterface
- 메소드는 단 하나

# 실습

- 파라미터
  - String 파라미터 2개
- 반환타입
  - int

(String s1, String s2) - > {
    return s1.length() + s2.length()
};

1. 인터페이스 생성
2. @FunctionalInterface 이노테이션 추가
3. 위의 파라미터, 반환타입 정의에 맞는 메서드 정의




