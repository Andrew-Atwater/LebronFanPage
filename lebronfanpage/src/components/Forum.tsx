import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

interface Post {
  username: string;
  message: string;
  timestamp: string;
}

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(() => {
    // Initialize posts from localStorage if available
    const savedPosts = localStorage.getItem('forumPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [username, setUsername] = useState(() => {
    // Remember the last used username
    return localStorage.getItem('lastUsername') || '';
  });
  const [message, setMessage] = useState('');

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(posts));
  }, [posts]);

  // Save username to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lastUsername', username);
  }, [username]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && message.trim()) {
      const newPost: Post = {
        username: username.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(), // Store as ISO string for consistent formatting
      };
      setPosts([newPost, ...posts]);
      setMessage('');
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Fan Forum
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Share your thoughts about LeBron"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
            >
              Post Message
            </Button>
          </form>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Recent Posts
          </Typography>
          <List>
            {posts.map((post, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={post.username}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary">
                          {post.message}
                        </Typography>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {new Date(post.timestamp).toLocaleString()}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index < posts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
            {posts.length === 0 && (
              <Typography variant="body1" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
                No posts yet. Be the first to share your thoughts!
              </Typography>
            )}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default Forum; 