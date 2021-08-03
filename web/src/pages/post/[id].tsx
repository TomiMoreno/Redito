import { Text, Box, Flex, Heading, Link } from '@chakra-ui/react'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'
import { Vote } from '../../components/Vote'
import { usePostQuery } from '../../generated/graphql'
import { createUrqlClient } from '../../utils/createUrqlClient'
import NextLink from 'next/link';
import { getTimeAgo } from '../../utils/timeAgo'

interface postProps{

}
export const post: React.FC<postProps> = () =>{
  const router = useRouter()
  const { id } = router.query
  const intId = typeof id === 'string' ? parseInt(id) : -1
  const [{data, fetching}]= usePostQuery(
    { pause: intId === -1,
      variables: 
      {id: intId}
    }
    )
    console.log(data)

  const p = data?.post
return (
  <Layout >
    <Box padding="5">
      { fetching
        ? <Box>Loading...</Box>
        : p 
          ? 
          <>
          <Flex justifyContent='space-between'>
            <Box>
              <Heading>{p.title}</Heading>
              <Text >Created by {p.creator.username} {getTimeAgo(Number(p.createdAt))}</Text>
            </Box>
            <Vote post={p}></Vote>
          </Flex>
            <Text>{p.body}</Text>
          </> 
          : <Box>
              <Heading>Post not found</Heading>
                <NextLink href="/">
                  <Link>Go back</Link>
                </NextLink>
            </Box>
        }
      </Box>
  </Layout>
)
}

export default withUrqlClient(createUrqlClient)(post)
