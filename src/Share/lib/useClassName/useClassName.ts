interface ClassNameProps {
    mainClass: string,
    additinalClass?: Array<string>,
    optinalClass?: Record<string, boolean>
}

// Функция обьеденяющая стили
export const useClassName = (
    {
        mainClass,
        additinalClass = [],
        optinalClass
    } : ClassNameProps
): string => {
     return [
         mainClass,
         ...additinalClass,
         optinalClass && Object.entries(optinalClass)?.filter(([key,value]) => value)
         ?.map((key) => key)
     ].join(' ')
}