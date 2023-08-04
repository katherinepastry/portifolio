import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { staggerContainer } from "../utils/motion";

interface StarWrapperProps {
  idName: string;
}

const StarWrapper = (
  Component: FunctionComponent,
  idName: string
): FunctionComponent<StarWrapperProps> => {
  const HOC: FunctionComponent<StarWrapperProps> = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

  return HOC;
};

export default StarWrapper;
