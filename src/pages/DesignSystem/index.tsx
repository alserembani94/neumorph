import React from 'react';
import {
    Input,
} from '../../components/CustomComponent';

// Construct types for component props
interface DesignSystemProps {
    
}

const DesignSystem: React.FC<DesignSystemProps> = () => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const updateInput = (newValue: string) => setInputValue(() => newValue);

    return (
        <React.Fragment>
            <main className="DesignSystem-Screen">
                <div className="DesignSystem-Container">
                    <p className="DesignSystem-SectionTitle">Input</p>
                    <Input
                        value={inputValue}
                        onChange={updateInput}
                        label='Label Here'
                        placeholder='Input here'
                    />
                </div>
            </main>
        </React.Fragment>
    );
};

export default DesignSystem;