<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <section class="quote-submission">
            <header class="entry-header">
                <h1 class="entry-title"><?php the_title() ?></h1>
            </header>

            <?php if( is_user_logged_in() && current_user_can( 'edit_posts' ) ): ?>
            <div class="quote-submission-wrapper">
                <form name="quote-form" id="quote-submission-form" class="submit-form">
                    <div>
                        <label for="author">Author of Quote</label>
                        <input type="text" name="author" id="author">
                    </div>
                    <div>
                        <label for="quote">Quote</label>
                        <textarea name="quote" id="quote" cols="20" rows="3" required></textarea>
                    </div>
                    <div>
                        <label for="source">Source</label>
                        <input type="text" name="source" id="source">
                    </div>
                    <div>
                        <label for="source-url">Source URL</label>
                        <input type="url" name="source_url" id="source-url">
                    </div>
                    <div>
                        <input type=submit value="Submit Quote">
                    </div>
                </form>
            </div>
            <?php else: ?>
            <p> Sorry, you must be logged in to submit a quote :( </p>
            <p><a href="<?php echo wp_login_url(); ?>">Click here to login</a></p>
            <?php endif; ?>
        </section>
    </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>