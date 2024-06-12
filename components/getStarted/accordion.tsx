"use client";
import useDisclosure from "@/hooks/useDisclosure";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaPlus } from "react-icons/fa6";



function AccordionComponent({
  questions,
}: {
  questions: { ques: string; ans: string }[];
}) {
  
  return (
    <Accordion allowZeroExpanded>
      {questions.map((item, i) => (
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton
              className="accordion aaccordion__button bg-primary p-5 flex items-center select-none"
              
            >
              <FaPlus className="text-xl me-4" />
              {item.ques}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.ans}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;
