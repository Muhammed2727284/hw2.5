import React, { useState, useEffect } from 'react';

const NameList = () => {
    const savedNames = JSON.parse(localStorage.getItem('names')) || [];
    const [names, setNames] = useState(savedNames);
    const [nameInput, setNameInput] = useState('');

    useEffect(() => {
        localStorage.setItem('names', JSON.stringify(names));
    }, [names]);

    const addName = () => {
        if (nameInput.trim()) {
            setNames([...names, nameInput.trim()]);
            setNameInput('');
        }
    };

    const removeName = (nameToRemove) => {
        setNames(names.filter(name => name !== nameToRemove));
    };

    return (
        <div>
            <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Введите имя"
            />
            <button onClick={addName}>Добавить</button>

            <ul>
                {names.map((name, index) => (
                    <li key={index}>
                        {name} <button onClick={() => removeName(name)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NameList;
