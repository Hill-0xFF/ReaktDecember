import { TComment } from '@/types/comments.type';

import Comment from './Comment';

type CommentProps = {
  comments: TComment[];
};

export default function Comments({ comments }: CommentProps) {
  return (
    <section>
      {comments?.[0] && comments?.[0]?.id ? (
        <Comment comments={comments} />
      ) : (
        // <p
        //   style={{
        //     backgroundColor: 'papayawhip',
        //     color: 'black',
        //     padding: '.75rem',
        //     borderRadius: '.5rem',
        //   }}
        // >
        //   No comments on the list!
        // </p>
        ''
      )}
    </section>
  );
}
