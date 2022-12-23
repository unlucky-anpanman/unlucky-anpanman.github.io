import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type PostHeadProps = PostHeadInfoProps & {
    thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const PostHead: FunctionComponent<PostHeadProps> = function ({
    title,
    date,
    categories,
}) {
    return (
        <PostHeadWrapper>
            <PostHeadInfo title={title} date={date} categories={categories} />
        </PostHeadWrapper>
    )
}

export default PostHead
