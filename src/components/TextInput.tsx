import { clsx } from 'clsx'; 
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot (props: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 outline-none py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'; // Utilizado para alterar como o nome irá aparecer no Code do storybook.

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
  <Slot className='w-6 h-6 text-gray-400'>
    {props.children}
  </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'; // Usar se o storiebook não conseguir reconhecer o nome do componente, durante elaboração não necessitou conforme foi na aula. Pode ser utilizado para alterar como o nome irá aparecer no Code do storybook.

function TextInputInput (props: TextInputInputProps) {

  return (
    <input
      className='bg-transparent outline-none flex-1 text-gray-100 placeholder:text-gray-400 text-xs'
      {...props}
    />
  )
};

TextInputInput.displayName = 'TextInput.Input'; // Utilizado para alterar como o nome irá aparecer no Code do storybook.

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}