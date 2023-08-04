import { styled } from '@stitches/react';

export const BoxStyleCadastro = styled('div', {
  backgroundColor: "#ffffff",
  border: "10px solid",
  borderImageSlice: "1",
  borderWidth: "9px",
  borderImageSource: "linear-gradient(to left, #FDA188, #FDA188)",
  borderRadius: "3px",
  boxShadow: "0 9px 40px rgba(42, 42, 42)",
  fontSize: "16px",
  maxWidth: "752px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "72px auto",
  padding: "2.5em 52px",
  height:'fit-content',
  '@bp1': {
    padding: '2.5em 20px',
    margin: '72px auto',
  },
});

export const TituloDaPagina = styled('h1', {
  marginTop: "-10px",
  width: "100%",
  marginBottom: "auto",
  textAlign: "center",
  color: "#000000",
  fontSize: "2em",
  fontWeight: "600",
  lineHeight: "1.45",
});

export const SubtituloDaPagina = styled('h1', {
  color: "#264B67",
  fontSize: "1.2rem",
  fontWeight: "500",
  lineHeight: "1.6",
  marginBottom:'10px',
  '@bp1': {
    fontSize: '0.8em',
  },
});

export const ListStyle = styled('div', {
  padding: "14px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  '@bp1': {
    padding: '10px',
  },
  '& input': {
    border:'1px solid black'
  }
});



export const TituloSecaoStyle = styled('h2', {
  color: "#000000",
  fontSize: "1.25rem",
  marginBottom: "20px",
  fontWeight: "bold",
  lineHeight: "1.45",
  '@bp1': {
    fontSize: '1rem',
    marginBottom: '15px',
  },
});
