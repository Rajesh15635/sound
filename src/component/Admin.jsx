import React, { useState, useEffect } from 'react';
import { Upload, X } from 'lucide-react';

function Admin() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  // Load existing videos from localStorage on component mount
  useEffect(() => {
    const storedVideos = localStorage.getItem('videos');
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Create a preview URL for the video
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  // Clear selected file
  const clearSelectedFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedFile || !title) {
      alert('Please provide a title and select a video file');
      return;
    }

    setUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      // Create a new video object
      const newVideo = {
        id: Date.now().toString(),
        title,
        description,
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
        fileType: selectedFile.type,
        uploadDate: new Date().toISOString(),
        url: previewUrl, // In a real app, this would be a server URL
      };

      // Add to videos array
      const updatedVideos = [...videos, newVideo];
      setVideos(updatedVideos);
      
      // Save to localStorage
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      
      // Reset form
      setTitle('');
      setDescription('');
      clearSelectedFile();
      setUploading(false);
      
      alert('Video uploaded successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-800 text-white">
            <h1 className="text-xl font-semibold">Video Admin Dashboard</h1>
            <p className="mt-1 text-sm text-gray-300">Upload and manage videos</p>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Video uploader */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video File
                  </label>
                  
                  {!selectedFile ? (
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                            <span>Upload a video</span>
                            <input 
                              id="file-upload" 
                              name="file-upload" 
                              type="file" 
                              accept="video/*"
                              className="sr-only" 
                              onChange={handleFileChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          MP4, WebM, Ogg up to 100MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-1 relative">
                      <div className="border border-gray-300 rounded-md p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <video className="h-16 w-24 object-cover rounded" src={previewUrl} />
                            <div>
                              <p className="text-sm font-medium truncate">{selectedFile.name}</p>
                              <p className="text-xs text-gray-500">
                                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={clearSelectedFile}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title input */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter video title"
                    required
                  />
                </div>

                {/* Description input */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter video description"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={uploading || !selectedFile}
                    className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      uploading || !selectedFile
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    }`}
                  >
                    {uploading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Uploading...
                      </>
                    ) : (
                      'Upload Video'
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Recently uploaded videos preview */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Recently Uploaded</h2>
              <div className="mt-4">
                {videos.length === 0 ? (
                  <p className="text-gray-500 text-sm">No videos uploaded yet.</p>
                ) : (
                  <ul className="border divide-y divide-gray-200 rounded-md overflow-hidden">
                    {videos.slice().reverse().slice(0, 5).map((video) => (
                      <li key={video.id} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0 h-12 w-16 bg-gray-100 rounded overflow-hidden">
                            <video className="h-full w-full object-cover" src={video.url} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{video.title}</p>
                            {video.description && (
                              <p className="text-sm text-gray-500 truncate">{video.description}</p>
                            )}
                            <p className="text-xs text-gray-400">
                              Uploaded on {new Date(video.uploadDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="mt-4 flex justify-end">
                  <a
                    href="/videos"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    View all videos →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;