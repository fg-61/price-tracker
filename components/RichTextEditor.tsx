"use client"
import { Editor } from '@tinymce/tinymce-react';

type RichTextEditorProps = { id: string, value: string, setValue: (value: string) => void }
const RichTextEditor = ({ id, value, setValue }: RichTextEditorProps) => {
    return (
        <Editor
            id={id}
            apiKey='l6t7dkpkh6gtby06zdsv2t09ibtbyo5vnj1jv5clvjrn1ctt'
            value={value}
            onEditorChange={setValue}
            init={{
                inline: true,
                language: 'tr',
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'visualblocks', 'fullscreen', 'media', 'table', 'wordcount'
                ],
                toolbar: 'undo redo | casechange blocks | bold italic underline | '
                    + 'alignleft aligncenter alignright alignjustify | '
                    + 'bullist numlist checklist outdent indent | link removeformat | image media table',
                content_style: 'body { font-family:Poppins, Arial,sans-serif; font-size:16px; } '
                    + '* { margin: 0px; padding: 0px; } '
                    + 'video { max-width: 100%; height: auto; border-radius: 6px; } '
                    + 'img { max-width: 100%; height: auto; border-radius: 6px; } '
                    + '.mce-content-body:hover { outline: 1px solid #1976D2; } '
                    + '.mce-content-body { outline: 1px solid #ededed; border-radius: 3px; padding: 12px; cursor: text } '
                    + '.mce-edit-focus { outline: 1px solid #1976D2; } ',
                inline_styles: true
            }}
        />
    )
}

export default RichTextEditor