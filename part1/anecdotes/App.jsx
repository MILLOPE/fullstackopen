import React, { useState } from 'react';

// 假设这是你的 Button 组件
const Button = ({ text, value }) => {
    return (
        <button onClick={value}>
            {text}
        </button>
    );
};

const App = () => {
    // 假设这是你的 anecdotes 数组
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ];

    // 生成随机数的函数
    const getRandom = () => {
        return Math.floor(Math.random() * anecdotes.length);
    };

    // 初始化 selected 状态
    const [selected, setSelected] = useState(getRandom());

    // 初始化投票状态
    const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

    // 处理点击下一个轶事的函数
    const handleClick = () => {
        setSelected(getRandom());
    };

    // 处理投票的函数
    const handleVote = (index) => {
        const copy = [...vote];
        copy[index] += 1;
        setVote(copy);
    };

    // 找出获得最多投票的轶事的索引
    const mostVotedIndex = vote.indexOf(Math.max(...vote));

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>This anecdote has {vote[selected]} votes.</p>
            <Button text='next anecdote' value={handleClick} />
            <Button text='vote' value={() => handleVote(selected)} />
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>This anecdote has {vote[mostVotedIndex]} votes.</p>
        </div>
    );
};

export default App;