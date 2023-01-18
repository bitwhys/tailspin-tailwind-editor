import React, { useEffect, useRef, useState } from 'react'
import SignInForm from '../SignInForm'
import { EditorAppBar, EditorFooter, Canvas } from './elements'

export type EditorProps = {}

export const Editor = ({}: EditorProps) => {
  const [elements, setElements] = useState<Array<Element>>([])
  const ref = useRef<HTMLDivElement>(null)
  const handleMouseOut = (e: MouseEvent) => {
    // @ts-ignore
    e.currentTarget.classList.remove('inspected')
  }
  const handleMoseMove = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e
    const element = document.elementFromPoint(x, y)
    element?.classList.add('inspected')
    // @ts-ignore
    element?.addEventListener<MouseEvent>('mouseout', handleMouseOut)
    console.log({ x, y, element })
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mousemove', handleMoseMove)
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', handleMoseMove)
      }
    }
  }, [])
  return (
    <div className="flex w-full max-w-5xl flex-col border shadow-md">
      <EditorAppBar />
      {/*// @ts-ignore*/}
      <Canvas ref={ref}>
        <SignInForm />
      </Canvas>
      <EditorFooter />
    </div>
  )
}
