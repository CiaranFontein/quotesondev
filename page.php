<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

<div id="primary" class="content-area about-page">
    <main id="main" class="site-main" role="main">
        <div class="container">
            <div class="quotation-mark"><i class="fas fa-quote-left"></i></div>
            <?php while ( have_posts() ) : the_post(); ?>

            <?php get_template_part( 'template-parts/content', 'page' ); ?>

            <?php endwhile; // End of the loop. ?>
            <div class="quotation-mark"><i class="fa fa-quote-right" aria-hidden="true"></i></div>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>