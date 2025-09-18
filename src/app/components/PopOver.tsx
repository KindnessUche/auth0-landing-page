"use client";
import React, { useState } from "react";
import { AnimatePresence, easeOut, motion } from "motion/react";

export default function PopOver({ direction, directionLeave }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [underline, setUnderline] = useState(0);
  return (
    <motion.div
      className=""
      onHoverStart={() => {
        setUnderline(1);
      }}
      onHoverEnd={() => {
        setUnderline(0);
      }}
    >
      <div
        className="flex py-4 relative justify-center items-center gap-1 cursor-pointer"
        onPointerEnter={() => setIsOpen(true)}
        onPointerLeave={() => setIsOpen(false)}
      >
        <a className="hover:text-[#C6BEEE] font-semibold">
          Developers
          <motion.span
            className="absolute left-0 bottom-0 h-[2px] bg-[#C6BEEE] w-full origin-center"
            initial={{ scaleX: 0.7, opacity: 0 }}
            animate={{ scaleX: underline, opacity: underline }}
            transition={{ duration: 0.27, ease: "linear" }}
          />
        </a>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="chevron-down">
            <path
              id="icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99994 9.93934L12.4696 5.46967L13.5303 6.53033L8.53027 11.5303C8.23738 11.8232 7.76251 11.8232 7.46961 11.5303L2.46961 6.53033L3.53027 5.46967L7.99994 9.93934Z"
              fill="#FFFEFA"
            ></path>
          </g>
        </svg>
      </div>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            className="
            absolute left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl pt-6 z-10 bg-transparent
          "
            onPointerEnter={() => setIsOpen(true)}
            onPointerLeave={() => setIsOpen(false)}
            initial={{ opacity: 0, x: direction == "left" ? 15 : -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: directionLeave == "left" ? -15 : 15 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <div
              className="w-full
              bg-[#171717f5] text-white
              border border-[#2a2a2a] rounded-xl shadow-lg
             flex
              z-50"
            >
              <div className="w-full min-w-[33%] border-r-1 border-[#2a2a2a] p-8 ">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-6">
                  Developers
                </p>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Developer Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Code Samples
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Guides
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Identity Unlocked - Podcasts
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Zero Index Newsletter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full min-w-[33%] border-r-1 border-[#2a2a2a] p-8 ">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-6">
                  Developer Tools
                </p>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      OIDC Connect Playground
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      SAML Tool
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      JWT.io
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Webauthn.me
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full min-w-[33%] p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-6">
                  Get Involved
                </p>
                <ul className="">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Auth0 Research Program
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
