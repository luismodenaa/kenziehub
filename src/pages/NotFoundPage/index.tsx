import { Container, IconError } from "./style";
import { motion } from "framer-motion";
import React from "react";

export const PageNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div>
          <h1>Erro</h1>
          <IconError />
          <h4>Not Found</h4>
          <p>Página não encontrada</p>
        </div>
      </Container>
    </motion.div>
  );
};
