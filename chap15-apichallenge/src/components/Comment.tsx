import { TComment } from '@/types/comments.type';

type CommentProps = {
  comments: TComment[];
};

export default function Comment({ comments }: CommentProps) {
  return (
    <ul>
      {comments?.map((commnt) => (
        <li key={commnt.id} className="comments">
          <p>{commnt.postId}</p>
          <p>{commnt.name}</p>
          <p>{commnt.email}</p>
        </li>
      ))}
    </ul>
  );
}
