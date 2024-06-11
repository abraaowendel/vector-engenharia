import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;

  tbody {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    font-size: 14px;
    color: #555;
  }

  td {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ddd;
  }

  thead {
    text-align: center;
  }

  img {
    height: 60px;
  }
  td:nth-child(1),
  td:nth-child(2) {
    padding: 20px;
    min-height: 100px;
    text-align: center;
  }
  td:nth-child(3) {
    height: 40px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }
    tr {
      margin: 5px;
    }
  }
  @media (max-width: 480px) {
    tbody {
      grid-template-columns: repeat(1, 1fr);
    }
    tr {
      margin: 10px 0;
    }
  }
`;
