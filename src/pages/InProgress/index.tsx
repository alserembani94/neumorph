import React from 'react';

// Construct types for component props
interface InProgressProps {
    
}

const InProgress: React.FC<InProgressProps> = () => {
    return (
        <React.Fragment>
            <main className="NotFound-Screen">
                <div className="NotFound-Title">
                    <p>This page is a work of progress</p>
                </div>
            </main>
        </React.Fragment>
    );
};

export default InProgress;