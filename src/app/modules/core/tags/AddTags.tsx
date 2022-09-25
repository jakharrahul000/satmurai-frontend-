import { preventDefaultFormSubmit } from '../../../utils/helpers';
import { useAppDispatch } from 'store/store';
import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { AddedTag } from './AddedTag';

interface IProps {
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
    tagsError: string | null;
    setTagsError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AddTags = ({ tags, setTags, tagsError, setTagsError }: IProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const addTag = (tag: string) => {
        const newTag = tag.replace(/ /g, '');
        if (!tags.includes(newTag) && newTag.length !== 0) {
            const newTags = [...tags, newTag];
            setTags(newTags);
        }
    };

    const removeTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    const onAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputRef && inputRef.current) {
            const target = inputRef.current;
            const value = target.value;

            console.log(event);
            if (value.length <= 35) {
                setTagsError(null);
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    addTag(value);
                    target.value = '';
                }
            } else {
                setTagsError('Maximum length of a tag is 35 characters');
            }
        }
    };

    return (
        <div className="w-full">
            <div className="bg-white border border-solid border-gray-300 rounded-md flex items-center flex-wrap">
                {tags.length > 0 &&
                    tags.map((tag, index) => {
                        return (
                            <AddedTag
                                onRemove={() => {
                                    removeTag(index);
                                }}
                                key={index}
                                className="m-1.5 md:m-1"
                                label={tag}
                            />
                        );
                    })}
                <input
                    className="w-full px-3 md:px-4 py-2 text-xs md:text-sm rounded-md outline-none text-gray-700 "
                    placeholder="Add tags"
                    ref={inputRef}
                    onKeyDown={preventDefaultFormSubmit}
                    onKeyUp={onAddTag}
                    autoComplete="off"
                />
            </div>
            {tagsError ? (
                <div className="pt-1 pl-1 text-red-700 text-xs">{tagsError}</div>
            ) : (
                <div className="pt-1 pl-1 text-gray-700 text-xs">{`(Press ${
                    isMobile ? 'enter' : 'enter or space'
                } to add tag)`}</div>
            )}
        </div>
    );
};
