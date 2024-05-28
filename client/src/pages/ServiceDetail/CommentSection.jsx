import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CommentSectionContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CommentInput = styled(TextField)`
  width: 100%;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CommentHeader = styled.h3`
  margin-bottom: 20px;
  color: #333;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const FlexStart = styled.div`
  display: flex;
  align-items: flex-start;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #6200ea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
`;

const CommentDetails = styled.div`
  flex-grow: 1;
`;

const CommentText = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
`;

const CommentUser = styled.span`
  font-weight: bold;
`;

const CommentDate = styled.span`
  font-style: italic;
`;

const CommentSection = ({ comments, comment, handleCommentChange, handleSubmitComment }) => {
  return (
    <CommentSectionContainer>
      <CommentInput
        id="standard-textarea"
        label="Comment"
        placeholder="Ecris ton commentaire"
        multiline
        variant="standard"
        value={comment}
        onChange={handleCommentChange}
      />
      <SubmitButton onClick={handleSubmitComment}>Submit</SubmitButton>
      <CommentHeader>Comments:</CommentHeader>
      {comments &&
        comments.map((comment) => (
          <CommentContainer key={comment.id}>
            <FlexStart>
              <UserAvatar>UA</UserAvatar>
              <CommentDetails>
                <CommentText>{comment.text}</CommentText>
                <CommentFooter>
                  <CommentUser>{comment.UserId}</CommentUser>
                  <CommentDate>{new Date(comment.createdAt).toLocaleDateString()}</CommentDate>
                </CommentFooter>
              </CommentDetails>
            </FlexStart>
          </CommentContainer>
        ))}
    </CommentSectionContainer>
  );
}

export default CommentSection;
