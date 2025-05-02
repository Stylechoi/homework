# Avatars 과제 회고

## 과제 개요  
Figma에서 제공된 interface → Avatars 시안을 참고해  
64×64 크기의 원형 아바타 8개를 4×2로 배열하고  
각 아바타 우측 하단에 상태 점이 반쯤 튀어나오게 구현했다.

## 구현 과정  
- CSS Grid로 4열 고정  
  `grid-template-columns: repeat(4, 64px)`  
- 상태 점은 `<span class="status-dot">`로 만들고  
  `position: absolute; bottom: -6px; right: -6px`으로 위치 조정  
- `.avatar.online`은 초록색(#4cfe88),  
  `.avatar.offline`은 회색(#dbdbdb)  
- `<ul><li>` 시멘틱 구조로 구성하고  
  점 요소는 `aria-hidden="true"`로 설정

## 배운 점  
- grid 레이아웃 기본기 다시 다질 수 있었고  
- absolute + 오프셋으로 실제 디자인 위치를 맞추는 감각을 익힘  
- 시멘틱하게 구조 짜는 게 생각보다 어렵지 않고 훨씬 보기 좋다는 것도 느낌

## 문제 해결  
처음엔 상태 점 위치가 어긋나고 잘리기도 했는데  
`overflow: visible`로 해결했고  
`transform` 대신 `bottom/right` 픽셀 단위로 조절하면서 정확한 위치를 맞췄다.

## 개선할 부분  
- 반응형 대응 추가  
- 상태 점에 `aria-label` 같은 접근성 정보 넣는 것도 고려 예정






