// Admin.jsx
import React, { useState, useEffect } from 'react';
import BlogPostForm from './BlogPostForm';
import BlogPostList from './BlogPostList';
import Dashboard from './Dashboard';
import Login from './Login';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogPosts, setBlogPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Load posts from localStorage
  useEffect(() => {
    if (isLoggedIn) {
      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        setBlogPosts(JSON.parse(savedPosts));
      }
    }
  }, [isLoggedIn]);

  // Save posts to localStorage
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }
  }, [blogPosts, isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('isLoggedIn');
    // Don't clear rememberMe to keep the checkbox state
    setIsLoggedIn(false);
    setActiveTab('dashboard');
    setEditingPost(null);
  };

  const handleCreatePost = (newPost) => {
    const post = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...newPost,
    };
    setBlogPosts([post, ...blogPosts]);
    setActiveTab('posts');
  };

  const handleUpdatePost = (updatedPost) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
    setEditingPost(null);
    setActiveTab('posts');
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setActiveTab('create');
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== postId));
    }
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'create', name: editingPost ? 'Edit Post' : 'Create Post', icon: '✏️' },
    { id: 'posts', name: 'All Posts', icon: '📝' },
  ];

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Main admin interface
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Blog Admin</h1>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Admin
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'create') setEditingPost(null);
                }}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === 'dashboard' && (
            <Dashboard blogPosts={blogPosts} />
          )}
          {activeTab === 'create' && (
            <BlogPostForm
              onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
              editingPost={editingPost}
              onCancel={() => {
                setEditingPost(null);
                setActiveTab('posts');
              }}
            />
          )}
          {activeTab === 'posts' && (
            <BlogPostList
              posts={blogPosts}
              onEdit={handleEditPost}
              onDelete={handleDeletePost}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;