import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonHTMLAttributes } from 'react';

const meta: Meta = {
    title: 'Atoms/Colors',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const ClickToCopy: React.FC<
    { value: string } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ value, ...attrs }) => {
    return (
        <button
            className="click-to-copy"
            {...attrs}
            style={{ border: "none", cursor: "pointer", ...attrs.style }}
            onClick={() => navigator.clipboard.writeText(value)}
            aria-label={`Copy ${value}`}
        />
    );
};

const renderColorRow = (prefix: string, count: number) => (
    <div className="container">
        {Array.from({ length: count }).map((_, index) => {
            const varName = `--${prefix}-${index}`;
            return (
                <div key={index} className="color-swatch">
                    <div className="label">{varName}:</div>
                    <ClickToCopy
                        className="color-box"
                        style={{ backgroundColor: `var(${varName})` }}
                        value={`var(${varName})`}
                    />
                </div>
            );
        })}
    </div>
);

export const Default: Story = {
    render: () => (
        <div>
            <style>{`
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.2rem;
        margin-bottom: var(--spacing-lg);
    }

    .color-swatch {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: var(--font-size-xs);
        color: var(--text-dark);
    }

    .label {
        margin-bottom: 0.25rem;
        font-weight: bold;
    }

    .color-box {
        width: 60px;
        aspect-ratio: 1 / 1;
        border-radius: 5px;
        box-shadow: var(--shadow);
    }
`}</style>


            <h3>Green</h3>
            {renderColorRow("green", 9)}

            <h3>Beige</h3>
            {renderColorRow("beige", 9)}

            <h3>Brown</h3>
            {renderColorRow("brown", 9)}
        </div>
    ),
};
