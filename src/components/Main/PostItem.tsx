import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PostFrontmatterType } from 'types/PostItem.types'
import { Link } from 'gatsby'


type PostItemProps = PostFrontmatterType & { link: string }
const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`
const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  border-radius: 10px;
  background-color : #ffffff;
`
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
  background-color : #ffffff;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 10px;
  background-color : #ffffff;
  color :#2f3542;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
  background-color : #ffffff;
  
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: white;
  background-color : #30336b;
  
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 10px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
  background-color : #ffffff;
  color : #2f3542;
`
const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>{item}</CategoryItem>
          ))}
        </Category>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <Date>{date}</Date>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem