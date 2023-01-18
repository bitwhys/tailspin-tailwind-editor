import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

const EditActions = () => (
  <div id="edit-actions" className="flex items-center space-x-3">
    <span
      id="undo"
      className="inline-flex h-9 w-9 items-center justify-center rounded border bg-neutral-50 text-neutral-300"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path
          fill="currentColor"
          d="M1.99873 12L10.9987 4V9C10.9987 9 18.6587 8.5 20.8487 13.3C22.4487 16.6 21.9487 19.2 21.8487 19.6C21.8787 19.48 21.3487 18.93 21.2687 18.82C21.0487 18.54 20.8087 18.27 20.5687 18C20.0887 17.48 19.5687 17 19.0087 16.57C18.1987 15.95 17.2787 15.45 16.2887 15.18C15.1987 14.89 14.0787 15 12.9587 15C12.3087 15 11.6487 15 10.9987 15V20L1.99873 12Z"
          strokeWidth="2"
        ></path>
      </svg>
    </span>
    <span
      id="redo"
      className="inline-flex h-9 w-9 items-center justify-center rounded border bg-neutral-50 text-neutral-300"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path
          fill="currentColor"
          d="M22 12L13 4V9C13 9 5.33999 8.5 3.14999 13.3C1.54999 16.6 2.04999 19.2 2.14999 19.6C2.11999 19.48 2.64999 18.93 2.72999 18.82C2.94999 18.54 3.18999 18.27 3.42999 18C3.90999 17.48 4.42999 17 4.98999 16.57C5.79999 15.95 6.71999 15.45 7.70999 15.18C8.79999 14.89 9.91999 15 11.04 15C11.69 15 12.35 15 13 15V20L22 12Z"
          strokeWidth="2"
        ></path>
      </svg>
    </span>
  </div>
)
const InspectActions = () => (
  <div id="edit-actions" className="flex items-center space-x-3">
    <span
      id="undo"
      className="inline-flex h-9 w-9 items-center justify-center rounded border bg-neutral-50 text-violet-600"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path
          strokeWidth="1"
          stroke="currentColor"
          fill="none"
          d="M11.5 14C15.0899 14 18 11.3137 18 8C18 4.68629 15.0899 2 11.5 2C7.91015 2 5 4.68629 5 8C5 11.3137 7.91015 14 11.5 14Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
        <path
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          d="M11.5 11C13.2949 11 14.75 9.65685 14.75 8C14.75 6.34315 13.2949 5 11.5 5C9.70507 5 8.25 6.34315 8.25 8C8.25 9.65685 9.70507 11 11.5 11Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
        <path strokeLinecap="round" strokeWidth="1" stroke="currentColor" d="M11.4974 10V20"></path>
        <path strokeLinecap="round" strokeWidth="1" stroke="currentColor" d="M14 14V20"></path>
        <path strokeLinecap="round" strokeWidth="1" stroke="currentColor" d="M16.5 15V20"></path>
        <path strokeLinecap="round" strokeWidth="1" stroke="currentColor" d="M19 16V20"></path>
        <path
          strokeLinejoin="round"
          strokeWidth="1"
          stroke="currentColor"
          fill="none"
          d="M19 20H11V19.9937C11 19.9937 10.2817 19.7229 9.27447 19.2967C8.26722 18.8706 7 18.9999 7 18.9999C7 18.9999 7.70917 19.1389 8.79945 19.7036C9.88973 20.2682 11 22 11 22V21.9986H19V20Z"
        ></path>
      </svg>
    </span>
    <span id="redo" className="inline-flex h-9 w-9 items-center justify-center rounded border bg-neutral-50 text-white">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path
          className="fill-violet-600"
          d="M17.29 2.29L21.7 6.7C21.89 6.89 22 7.15 22 7.41V21C22 21.55 21.55 22 21 22H3C2.45 22 2 21.55 2 21V3C2 2.45 2.45 2 3 2H16.59C16.85 2 17.11 2.11 17.29 2.29Z"
          strokeWidth="2"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1"
          stroke="currentColor"
          d="M16 15L19 12L16 9"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1"
          stroke="currentColor"
          d="M8 15L5 12L8 9"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1"
          stroke="currentColor"
          d="M10.1799 17L13.8199 7"
        ></path>
      </svg>
    </span>
  </div>
)

const ViewportActions = () => (
  <div className="p-15 flex items-center rounded border-2 bg-neutral-100 text-neutral-400">
    <span id="desktop" className="inline-flex h-9 w-9 items-center justify-center bg-violet-100 text-violet-600">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          d="M13 16H11V21H13V16Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          stroke="currentColor"
          d="M7 21H17"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          d="M21.5 16H2.5C2.22 16 2 15.78 2 15.5V3.5C2 3.22 2.22 3 2.5 3H21.5C21.78 3 22 3.22 22 3.5V15.5C22 15.78 21.78 16 21.5 16Z"
        ></path>
      </svg>
    </span>
    <span id="tablet" className="inline-flex h-9 w-9 items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          d="M4 2H20V22H4V2Z"
        ></path>
        <path strokeWidth="2" stroke="currentColor" fill="none" d="M6.6 4.6H17.4V16.4H6.6V4.6Z"></path>
        <circle strokeWidth="2" stroke="currentColor" fill="none" r="0.5" cy="19" cx="12"></circle>
      </svg>
    </span>
    <span id="mobile" className="inline-flex h-9 w-9 items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          d="M16 22H8C6.9 22 6 21.1 6 20V4C6 2.9 6.9 2 8 2H16C17.1 2 18 2.9 18 4V20C18 21.1 17.1 22 16 22Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
        <path
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          stroke="currentColor"
          d="M13.47 3H10.53C10.51 3 10.5 2.99 10.5 2.97V2H13.5V2.97C13.5 2.99 13.49 3 13.47 3Z"
        ></path>
      </svg>
    </span>
  </div>
)

const FileActions = () => (
  <div className="flex items-center space-x-4">
    <div className="inline-flex items-center justify-center rounded bg-neutral-300 px-6 py-2 text-lg font-semibold text-neutral-900">
      Save as
    </div>
    <div className="inline-flex items-center justify-center rounded bg-violet-600 px-6 py-2 text-lg font-semibold text-white">
      Preview
    </div>
  </div>
)

export const EditorAppBar = () => (
  <header className="border-b border-neutral-400/50 bg-white px-8 py-4">
    <div className="flex items-center justify-between">
      <EditActions />
      <ViewportActions />
      <InspectActions />
    </div>
  </header>
)

export const EditorFooter = () => (
  <footer className="border-t border-neutral-400/50 bg-white px-8 py-4">
    <div className="items-enter flex justify-end">
      <FileActions />
    </div>
  </footer>
)

export interface CanvasProps {
  children: ReactNode
}

// @ts-ignore
export const Canvas = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<CanvasProps>>(({ children }, ref) => {
  /** TODO: check if child is a single element
     - if so, attach ref to root node
     - if child is a fragment, wrap in div & attach ref to this
       - exclude this wrapper from triggering inspect function
   */
  return (
    <div className="flex items-center justify-center bg-neutral-200 py-16">
      <div className="flex h-[692px] w-[728px] items-center justify-center">
        <div ref={ref}>{children}</div>
      </div>
    </div>
  )
})
Canvas.displayName = 'EditorCanvas'
