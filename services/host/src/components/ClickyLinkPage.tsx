import { Container, useTheme, Section, ThemeToggle, CustomLink, Typography, TabsPreview, TypographyPreview, ButtonPreview, CardPreview, SectionPreview, } from "@packages/shared/src";
import { GridPreview } from "@packages/shared/src/components/Layout/Grid/GridPreview";
import { CustomLinkPreview } from "@packages/shared/src/components/ui/CustomLink/PreviewCustomLink";
import { ColorSystemDemo } from "@packages/shared/src/components/ui/Preview";
import React from "react";


export const ClickyLinkPage: React.FC = () => {

    return (
        <Container size="xl" padding="lg">
            <Typography variant="h1">
                Любим потыкать ссылочки? Я тоже! Вот тебе две на выбор!

            </Typography>

            <CustomLink to="/customStoryBook#CustomLinkSection" variant="primary"> вернуться в раздел с demo </CustomLink>

            <CustomLink
                variant="secondary"
                to="https://giphy.com/explore/space"
                external> позалипать на гифки </CustomLink>


        </Container>
    );
};
