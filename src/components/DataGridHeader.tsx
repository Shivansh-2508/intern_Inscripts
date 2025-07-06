import React from "react";
import briefcaseIcon from "../assets/briefcase0.svg";
import chevronIcon from "../assets/chevron2.svg";
import calendarIcon from "../assets/calendar0.svg";
import chevronCircleIcon from "../assets/chevron-circle0.svg";
import personIcon from "../assets/person0.svg";
import globeIcon from "../assets/globe0.svg";
import emojiIcon from "../assets/emoji0.svg";

interface DataGridHeaderProps {
  colWidths: number[];
  handleResizeMouseDown: (
    e: React.MouseEvent<HTMLDivElement>,
    colIdx: number,
  ) => void;
}

const DataGridHeader: React.FC<DataGridHeaderProps> = ({
  colWidths,
  handleResizeMouseDown,
}) => {
  return (
    <thead>
      {/* Grouped header row */}
      <tr>
        {/* # column: no header */}
        <th
          className="p-0 h-6 min-h-0 w-6 max-w-8 text-[10px] text-[#BCBCBC] bg-white border border-[#eeeeee] text-center"
        ></th>
        {/* Q3 Financial Overview: spans columns 1-4 */}
        <th
          colSpan={4}
          className="bg-[#E2E2E2] border border-[#E3E5E8] p-1 h-7 min-h-0 text-left text-xs font-medium text-[#3B3F4C] tracking-wide"
          style={{ minWidth: colWidths.slice(1, 5).reduce((a, b) => a + b, 0) }}
        >
          <div className="flex items-center h-7 min-h-0">
            {/* Blue Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <path
                d="M6.16667 4.66667C6.44281 4.66667 6.66667 4.89053 6.66667 5.16667C6.66667 5.41771 6.48166 5.62554 6.24056 5.66125L6.16667 5.66667H4.66667C3.378 5.66667 2.33334 6.71134 2.33334 8C2.33334 9.24265 3.30472 10.2584 4.52957 10.3294L4.66667 10.3333H6.16667C6.44281 10.3333 6.66667 10.5572 6.66667 10.8333C6.66667 11.0844 6.48166 11.2922 6.24056 11.3279L6.16667 11.3333H4.66667C2.82572 11.3333 1.33334 9.84095 1.33334 8C1.33334 6.21484 2.73664 4.75744 4.5003 4.67075L4.66667 4.66667H6.16667ZM11.3333 4.66667C13.1743 4.66667 14.6667 6.15906 14.6667 8C14.6667 9.78517 13.2634 11.2426 11.4997 11.3293L11.3333 11.3333H9.83334C9.55719 11.3333 9.33334 11.1095 9.33334 10.8333C9.33334 10.5823 9.51834 10.3745 9.75945 10.3388L9.83334 10.3333H11.3333C12.622 10.3333 13.6667 9.28867 13.6667 8C13.6667 6.75736 12.6953 5.7416 11.4704 5.67063L11.3333 5.66667H9.83334C9.55719 5.66667 9.33334 5.44281 9.33334 5.16667C9.33334 4.91563 9.51834 4.70781 9.75945 4.67209L9.83334 4.66667H11.3333ZM4.66667 7.50001H11.3333C11.6095 7.50001 11.8333 7.72386 11.8333 8C11.8333 8.25314 11.6452 8.46233 11.4012 8.49544L11.3333 8.5H4.66667C4.39053 8.5 4.16667 8.27615 4.16667 8C4.16667 7.74687 4.35477 7.53768 4.59882 7.50457L4.66667 7.50001H11.3333H4.66667Z"
                fill="#1A8CFF"
              />
            </svg>

            {/* Label + Alert Icon */}
            <div className="flex items-center bg-[#EEEEEE] py-0.5 px-1.5 rounded-md border border-[#EEEEEE] cursor-pointer h-[26px]">
              <span className="mr-2 text-[#545454] text-sm">
                Q3 Financial Overview
              </span>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M10.8337 3.45341C10.6663 3.67298 10.7085 3.98673 10.9281 4.15419C12.1203 5.06343 12.8333 6.47214 12.8333 8C12.8333 10.4907 10.9494 12.5413 8.52888 12.8047L8.97978 12.3536C9.17505 12.1583 9.17505 11.8417 8.97978 11.6464C8.80227 11.4689 8.5245 11.4528 8.32876 11.598L8.27268 11.6464L6.93934 12.9798C6.76183 13.1573 6.7457 13.4351 6.89093 13.6308L6.93934 13.6869L8.27268 15.0202C8.46794 15.2155 8.78452 15.2155 8.97978 15.0202C9.1573 14.8427 9.17343 14.5649 9.0282 14.3692L8.97978 14.3131L8.47963 13.8139C11.4769 13.57 13.8333 11.0602 13.8333 8C13.8333 6.15685 12.9721 4.45548 11.5345 3.35905C11.3149 3.19159 11.0012 3.23384 10.8337 3.45341ZM7.02022 0.979782C6.82496 1.17504 6.82496 1.49163 7.02022 1.68689L7.51972 2.18616C4.52273 2.4304 2.16667 4.94006 2.16667 8C2.16667 9.76297 2.95418 11.3983 4.28721 12.4994C4.50011 12.6753 4.81527 12.6452 4.99113 12.4323C5.16699 12.2194 5.13697 11.9043 4.92407 11.7284C3.81863 10.8153 3.16667 9.46147 3.16667 8C3.16667 5.50958 5.05022 3.45908 7.47047 3.19535L7.02022 3.64645C6.82496 3.84171 6.82496 4.15829 7.02022 4.35356C7.21549 4.54882 7.53207 4.54882 7.72733 4.35356L9.06066 3.02022C9.25593 2.82496 9.25593 2.50838 9.06066 2.31312L7.72733 0.979782C7.53207 0.78452 7.21549 0.78452 7.02022 0.979782Z"
                fill="#FA6736"
              />
            </svg>
          </div>
        </th>
        {/* URL: no header */}
        <th
          className="bg-white border border-[#E3E5E8] p-1 h-7 min-h-0 px-4 text-xs"
          style={{ width: colWidths[5], minWidth: 60 }}
        ></th>
        {/* ABC: col 6 */}
        <th
          className="bg-[#E6F0EA] border border-[#E3E5E8] p-1 h-7 min-h-0 px-4 text-center text-xs font-medium text-[#2B4A3D] tracking-wide"
          style={{ width: colWidths[6], minWidth: 60 }}
        >
          <div className="flex items-center justify-center h-7 min-h-0">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0491 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1464C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z"
                fill="#A3ACA3"
              />
            </svg>
            <span>ABC</span>
            <span
              className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-1"
              style={{ lineHeight: 1 }}
            >
              ...
            </span>
          </div>
        </th>
        {/* Answer a question: cols 7-8 */}
        <th
          colSpan={2}
          className="bg-[#EAE6F7] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-center text-xs font-semibold text-[#3B2F4C] tracking-wide"
          style={{ width: colWidths[7] + colWidths[8], minWidth: 120 }}
        >
          <span className="inline-flex items-center h-7 min-h-0">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0491 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1464C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z"
                fill="#A3ACA3"
              />
            </svg>
            Answer a question
            <span
              className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-1"
              style={{ lineHeight: 1 }}
            >
              ...
            </span>
          </span>
        </th>
        {/* Extract: col 9 */}
        <th
          className="bg-[#F7EAE6] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-center text-xs font-semibold text-[#4C2B2B] tracking-wide"
          style={{ width: colWidths[9], minWidth: 60 }}
        >
          <span className="inline-flex items-center h-7 min-h-0">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0491 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1464C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z"
                fill="#A3ACA3"
              />
            </svg>
            <span className="flex items-center">
              Extract{" "}
              <span
                className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-1"
                style={{ lineHeight: 1 }}
              >
                ...
              </span>
            </span>
          </span>
        </th>
        {/* +: col 10 */}
        <th
          className="bg-[#E3E5E8] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-center text-xs font-semibold text-[#8C6C62] tracking-wide"
          style={{ width: 60, minWidth: 60 }}
        >
          <span className="inline-flex items-center h-7 min-h-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.79153 2.5C10.1079 2.5 10.3695 2.73501 10.4109 3.04007L10.4167 3.12487L10.4177 9.16667H16.4619C16.8071 9.16667 17.0869 9.44649 17.0869 9.79167C17.0869 10.1081 16.8518 10.3696 16.5467 10.411L16.4619 10.4167H10.4177L10.4194 16.4576C10.4194 16.8028 10.1397 17.0827 9.7945 17.0827C9.47808 17.0827 9.21654 16.8477 9.17509 16.5427L9.16937 16.4578L9.16766 10.4167H3.12683C2.78165 10.4167 2.50183 10.1368 2.50183 9.79167C2.50183 9.47525 2.73696 9.21376 3.04202 9.17237L3.12683 9.16667H9.16766L9.16666 3.12513C9.16659 2.77995 9.44635 2.5 9.79153 2.5Z"
                fill="#04071E"
              />
            </svg>
          </span>
        </th>
      </tr>
      {/* Column header row (actual columns and resize handles) */}
      <tr>
        {/* # column */}
        <th
          className="bg-[#F7F8FA] border border-[#E3E5E8] p-0 h-6 min-h-0 w-6 max-w-8 text-[10px] font-bold text-[#3B3F4C] relative text-center"
        >
          #
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 0)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Job Request */}
        <th
          className="bg-[#F7F8FA] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#3B3F4C] text-left relative"
          style={{ width: colWidths[1], minWidth: 60 }}
        >
          <span className="flex items-center justify-between w-full h-7 min-h-0">
            <span className="flex items-center">
              <img
                src={briefcaseIcon}
                alt="briefcase"
                className="w-4 h-4 mr-2"
              />
              Job Request
            </span>
            <img
              src={chevronIcon}
              alt="chevron"
              className="w-3 h-3 ml-2 self-center"
            />
          </span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 1)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Submitted */}
        <th
          className="bg-[#F7F8FA] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#3B3F4C] text-left relative"
          style={{ width: colWidths[2], minWidth: 60 }}
        >
          <span className="flex items-center justify-between w-full h-7 min-h-0">
            <span className="flex items-center">
              <img src={calendarIcon} alt="calendar" className="w-4 h-4 mr-2" />
              Submitted
            </span>
            <img
              src={chevronIcon}
              alt="chevron"
              className="w-3 h-3 ml-2 self-center"
            />
          </span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 2)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Status */}
        <th
          className="bg-[#F7F8FA] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#3B3F4C] text-left relative"
          style={{ width: colWidths[3], minWidth: 60 }}
        >
          <span className="flex items-center justify-between w-full h-7 min-h-0">
            <span className="flex items-center">
              <img
                src={chevronCircleIcon}
                alt="chevron-circle"
                className="w-4 h-4 mr-2"
              />
              Status
            </span>
            <img
              src={chevronIcon}
              alt="chevron"
              className="w-3 h-3 ml-2 self-center"
            />
          </span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 3)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Submitter */}
        <th
          className="bg-[#F7F8FA] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#3B3F4C] text-left relative"
          style={{ width: colWidths[4], minWidth: 60 }}
        >
          <div className="flex items-center justify-between w-full h-7 min-h-0">
            {/* Left content */}
            <span className="flex items-center">
              <img src={personIcon} alt="person" className="w-4 h-4 mr-2" />
              Submitter
            </span>

            {/* Chevron icon on right */}
            <img
              src={chevronIcon}
              alt="chevron"
              className="w-3 h-3 ml-2 self-center"
            />
          </div>

          {/* Resize handle */}
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 4)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* URL */}
        <th
          className="bg-[#F7F8FA] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#3B3F4C] text-left relative"
          style={{ width: colWidths[5], minWidth: 60 }}
        >
          <span className="flex items-center justify-between w-full h-7 min-h-0">
            <span className="flex items-center">
              <img src={globeIcon} alt="globe" className="w-4 h-4 mr-2" />
              URL
            </span>
            <img
              src={chevronIcon}
              alt="chevron"
              className="w-3 h-3 ml-2 self-center"
            />
          </span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 5)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Assigned (ABC) */}
        <th
          className="bg-[#E6F0EA] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#2B4A3D] text-left relative"
          style={{ width: colWidths[6], minWidth: 60 }}
        >
          <span className="flex items-center h-7 min-h-0">
            <img src={emojiIcon} alt="emoji" className="w-4 h-4 mr-2" />
            Assigned
          </span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 6)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Priority (Answer a question) */}
        <th
          className="bg-[#EAE6F7] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#3B3F4C] text-left relative"
          style={{ width: colWidths[7], minWidth: 60 }}
        >
          <span className="flex items-center h-7 min-h-0">Priority</span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 7)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Due Date (Answer a question) */}
        <th
          className="bg-[#EAE6F7] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#3B3F4C] text-left relative"
          style={{ width: colWidths[8], minWidth: 60 }}
        >
          <span className="flex items-center h-7 min-h-0">Due date</span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 8)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* Est. Value (Extract) */}
        <th
          className="bg-[#F7EAE6] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#4C2B2B] text-left relative"
          style={{ width: colWidths[9], minWidth: 60 }}
        >
          <span className="flex items-center h-7 min-h-0">Est. Value</span>
          <div
            onMouseDown={(e) => handleResizeMouseDown(e, 9)}
            className="absolute right-0 top-2 h-full w-2 cursor-col-resize"
            style={{ background: "transparent" }}
          />
        </th>
        {/* + column */}
        <th
          className="bg-[#E3E5E8] border border-[#E3E5E8] p-1 h-7 min-h-0 px-3 text-xs font-bold text-[#4C2B2B] text-left relative"
          style={{ width: 60, minWidth: 60 }}
        >
          <span className="flex items-center h-7 min-h-0"></span>
        </th>
      </tr>
    </thead>
  );
};

export default DataGridHeader;
