import styled from '@emotion/styled'

interface Props {
  selected: string
  onChange: (label: string) => void
}

export const RankingFilter = ({ selected, onChange }: Props) => {
  const filters = ['전체', '여성이', '남성이', '청소년이']

  return (
    <FilterWrapper>
      {filters.map(label => (
        <FilterButton
          key={label}
          style={{
            backgroundColor: label === selected ? '#333' : '#ccc'
          }}
          onClick={() => onChange(label)}
        >
          {label}
        </FilterButton>
      ))}
    </FilterWrapper>
  )
}
3️⃣ RankingSortTabs.tsx
tsx
코드 복사
interface Props {
  selected: string
  onChange: (label: string) => void
}

export const RankingSortTabs = ({ selected, onChange }: Props) => {
  const tabs = ['받고 싶어한', '많이 선물한', '위시로 받은']

  return (
    <TabWrapper>
      {tabs.map(label => (
        <Tab
          key={label}
          style={{
            backgroundColor: label === selected ? '#333' : '#ccc'
          }}
          onClick={() => onChange(label)}
        >
          {label}
        </Tab>
      ))}
    </TabWrapper>
  )
}
export default RankingFilter