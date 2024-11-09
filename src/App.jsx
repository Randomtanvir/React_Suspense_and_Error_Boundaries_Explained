import { Suspense, useState } from "react";

import "./App.css";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>

      <div>
        <ErrorBoundary
          fallback={<h1 className="error">This is an error occurd</h1>}
        >
          <Suspense fallback={<h1>Loading data...</h1>}>
            <PostSelector onSelectPost={handleSelectPost} />
          </Suspense>
          {selectedPostId && (
            <ErrorBoundary
              fallback={<h1 className="error">Error fetching comments</h1>}
            >
              <Suspense fallback={<h1>Loading comments...</h1>}>
                <Comments postId={selectedPostId} />
              </Suspense>
            </ErrorBoundary>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}
