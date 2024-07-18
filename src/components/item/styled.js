import styled from "styled-components";

export const Area = styled.div`
    min-height: 1px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    p{
      display: inline-block;
      margin: 10px 0;
      font-size: 18px;
      max-height: 54px;
      height: 100%;
      max-width: 75%;
    }
    h4{
      font-size: 26px;
    }
    span{
      color: #8B0000;
    }
    .photo{
      position: relative;
      height: 255px;
      .arrows{
        .arrow-left{
          position: absolute;
        }
        .arrow-right{
        
        }
      }
    }
    .photo img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .button{
      text-align: center;
      max-width: 200px;
      width: 100%;
      border-radius: 5px;
      margin: 10px 0 30px;
      padding: 15px;
      background-color: #DC0000;
      color: #fff;
      &:hover{
        background-color: #8B0000;
      }
    }
    @media (max-width: 480px) {
      .photo{
        height: auto;      
      }
      img{
      }
      p{
        margin-bottom: 0;
      }
      h4{
        margin: 10px 0;
        font-size: 25px;
      }
      span{        
        font-size: 15px;
      }
    }
    @media (min-width: 576px) {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media (min-width: 768px) {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media (min-width: 992px) {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
`;
