import PostPreview from "@/src/components/blog/PostPreview";
import { Post } from "@/src/types";
import { Stack } from "@mui/material";
import Fade from '@mui/material/Fade';
import { TransitionGroup } from "react-transition-group";

const PostList = ({ posts }: { posts: Post[] }) => {
  return <Stack sx={{ my: 4 }} gap={10}>
    <TransitionGroup>
      {posts?.map((post: Post, index) => {
        const { title } = post
        return <Fade key={title + index}>
          <div><PostPreview key={title + index} post={post}/></div>
        </Fade>
      })}
    </TransitionGroup>
  </Stack>
};

export default PostList;
