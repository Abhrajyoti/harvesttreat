# Harvest Treats Deployment Notes

## Domain

The storefront is authored for `https://www.harvesttreats.com/`.

To launch it, point DNS for `www.harvesttreats.com` to the selected static hosting provider and configure HTTPS. The root domain `harvesttreats.com` should redirect to `https://www.harvesttreats.com/` so the canonical URL is consistent.

## Static Files

Deploy the contents of the `website/` folder together:

- `website/index.html`
- `website/styles.css`
- `website/app.js`
- `website/robots.txt`
- `website/sitemap.xml`
- `website/Logo.jpeg`
- `website/Images/`

## Contact And Social Links

The storefront displays:

- Contact number: `9123068708`
- Facebook: `https://www.facebook.com/share/1D4qu5PP6X/`
- Instagram: `https://www.instagram.com/harvest.treats?igsh=ZDEwNTQ2OHk4eGly`
- WhatsApp: `https://wa.me/919123068708`

## SEO Follow-Up

The page includes technical SEO metadata, semantic product content, image alt text, structured data, `robots.txt`, and `sitemap.xml`. Search ranking is not guaranteed by code alone.

After deployment:

- Add the domain to Google Search Console.
- Submit `https://www.harvesttreats.com/sitemap.xml`.
- Create or update the Harvest Treats Google Business Profile if the business has a service area or storefront.
- Keep product pricing and availability current.
- Add trustworthy backlinks, marketplace profiles, and social profiles pointing to the canonical domain.
- Monitor Core Web Vitals and indexing coverage.

## Catalog Source

The current catalog uses the uploaded images in `Images/` and pricing from `HarvestTreats_Price_List.xlsx`. Product cards show the discounted price as the selling price and keep the original price visible as the list price.

Current price-list values:

| Product | Quantity | List Price | Discount | Discounted Price |
| --- | --- | ---: | ---: | ---: |
| Premium Makhana / Fox Nut | 200g | Rs. 350 | 15% | Rs. 297.50 |
| Americano Almond | 200g | Rs. 300 | 20% | Rs. 240 |
| Cashew Nuts | 200g | Rs. 300 | 20% | Rs. 240 |
| Pure Cow Ghee | 250g | Rs. 300 | 10% | Rs. 270 |
| Roasted Mix Seeds | 200g | Rs. 200 | 20% | Rs. 160 |
| Pumpkin Seeds | 200g | Rs. 200 | 20% | Rs. 160 |
| Sunflower Seeds | 200g | Rs. 150 | 20% | Rs. 120 |
| Trail Mix | 500g | Rs. 800 | 20% | Rs. 640 |
| Dry Dates | 200g | Rs. 80 | 15% | Rs. 68 |
