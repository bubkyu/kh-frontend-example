
-- 인덱스를 막 걸었다고 성능이 변화?
-- 매 수신만 나타내는 (Y or N)만 나타내는 행은 굳이? 
-- 인덱스가 낮은 컬럼(문자열???)으로 하면 성능이 좋아져 

-- 중복도

-- 중복도가 낮다
    -- 원소 수가 많다
        --특정할 수 있는 행이 명확 해짐
            --카디널리티가 높다.(성능이 좋다.)

-- 중복도가 높다.
    -- 원소 수가 적다
        -- DB가 탐색해야 할  행의 범위가 커짐
            -- 카디널리티가 낮다.(성능이 안좋다.)
