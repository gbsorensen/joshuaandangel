export default function SectionTitle({
    title,
    subtitle
}) {
    return (
        <div className="mb-16 text-center">

            {subtitle && (
                <p className="uppercase tracking-[0.35em] text-xs text-[#8a6c57]">
                    {subtitle}
                </p>
            )}

            <h2 className="font-title text-5xl mt-4">
                {title}
            </h2>

        </div>
    );
}