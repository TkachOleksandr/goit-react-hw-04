import { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #0077ff;
  padding: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 24px;
  font-size: 16px;
  background-color: #fff;
  color: #0077ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #e6f0ff;
  }
`;

export const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === '') return;
    onSubmit(search.trim());
    setSearch('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Header>
  );
};
