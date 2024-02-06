import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor="white" borderRadius="lg" alignItems="flex-start">
      <Image src={imageSrc} alt={title} borderRadius="lg" w="100%" />
      <Heading size="md" color="black" pl={4} pt={2}>
        {title}
      </Heading>
      <Text color="gray" pl={4} pt={2}>
        {description}
      </Text>
      <HStack color="black" pl={4} pb={4}></HStack>
    </VStack>
  );
};

export default Card;
